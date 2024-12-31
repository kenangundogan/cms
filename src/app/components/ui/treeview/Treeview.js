import React, { useState } from 'react';

// Varsayılan ikonlar (Chevron tarzında Unicode karakterler)
const defaultIcons = {
    expanded: '↓', // Açık durumda ▼
    collapsed: '→', // Kapalı durumda ▶
    leaf: '•', // Yaprak düğüm •
};

const TreeView = ({ icons = defaultIcons, defaultExpanded = false, children }) => {
    return (
        <ul className="treeview list-none">
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { icons, defaultExpanded })
            )}
        </ul>
    );
};

const TreeViewItem = ({ children, disabled = false, label, icons = defaultIcons, defaultExpanded }) => {
    const [isOpen, setIsOpen] = useState(defaultExpanded && !disabled);

    const hasChildren = React.Children.toArray(children).some(
        (child) => React.isValidElement(child) && child.type === TreeViewItem
    );

    const handleToggle = () => {
        // Disabled öğeler tıklanamaz
        if (!disabled && hasChildren) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <li className="treeview-item">
            <div
                className={`flex items-center gap-2 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    }`}
                onClick={handleToggle}
            >
                {hasChildren ? (
                    <span className="text-gray-600">{isOpen ? icons.expanded : icons.collapsed}</span>
                ) : (
                    <span className="text-gray-600">{icons.leaf || '•'}</span>
                )}
                <span className="font-medium">{label}</span>
            </div>
            {hasChildren && !disabled && (
                <ul className={`${isOpen ? 'block' : 'hidden'} ml-4 list-none`}>
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
