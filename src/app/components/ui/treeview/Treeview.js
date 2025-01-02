import React, { useState } from 'react';

const defaultIcons = {
    expanded: '↓', //  ▼
    collapsed: '→', //  ▶
    leaf: '•', //  •
};

const TreeView = ({ icons = defaultIcons, defaultExpanded = false, children }) => {
    return (
        <ul className="treeview list-none pl-4 border-l space-y-2 border-gray-300">
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { icons, defaultExpanded })
            )}
        </ul>
    );
};

const TreeViewItem = ({ children, disabled = false, label, icons = defaultIcons, defaultExpanded, type = 'folder' }) => {
    const [isOpen, setIsOpen] = useState(defaultExpanded && !disabled);

    const hasChildren = React.Children.toArray(children).some(
        (child) => React.isValidElement(child) && child.type === TreeViewItem
    );

    const handleToggle = () => {
        if (!disabled && hasChildren) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <li className="relative">
            <div
                className={`flex items-center gap-2 relative ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                onClick={handleToggle}
            >
                <span className="before:absolute before:top-0 before:bottom-0 before:m-auto before:left-[-16px] before:w-[16px] before:h-[1px] before:bg-gray-300" />
                {hasChildren ? (
                    <span className="text-xs border p-1 rounded-sm w-6 h-6 flex items-center justify-center">{isOpen ? icons.expanded : icons.collapsed}</span>
                ) : (
                    <span className="text-xs border p-1 rounded-sm w-6 h-6 flex items-center justify-center">{icons.leaf}</span>
                )}
                <span className={`font-medium ${disabled ? 'text-gray-400' : 'text-gray-800'}`}>{label}</span>
            </div>
            {hasChildren && !disabled && (
                <ul
                    className={`space-y-2 pl-4 py-2 border-l border-gray-300 ${isOpen ? 'block' : 'hidden'}`}
                >
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { icons, defaultExpanded })
                    )}
                </ul>
            )}
        </li>
    );
};

TreeView.Item = TreeViewItem;

export default TreeView;
