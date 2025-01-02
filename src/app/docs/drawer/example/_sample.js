'use client';
import { useState } from 'react';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Drawer from '@/app/components/ui/drawer/Drawer';

const positions = ['top', 'right', 'bottom', 'left'];

const generateBasicExample = () => {
    return {
        JS: `
<Drawer open={open} position="left" onClose={onClose}>
    Content for left drawer...
</Drawer>
        `,
    };
};

const SampleExample = () => {
    const [openDrawers, setOpenDrawers] = useState({
        top: false,
        right: false,
        bottom: false,
        left: false,
    });

    const toggleDrawer = (position) => {
        setOpenDrawers((prev) => ({
            ...prev,
            [position]: !prev[position],
        }));
    };
    return (
        <div>
            <Example>
                <Example.Title>Sample Usage</Example.Title>
                <Example.Description>
                    This example demonstrates how to use the <code>Drawer</code> component to create a drawer that slides in from any edge of the screen.
                </Example.Description>
                <Example.Body>
                    <div className='flex flex-wrap gap-4 mb-4'>
                        {positions.map((position) => (
                            <div key={position}>
                                <button
                                    onClick={() => toggleDrawer(position)}
                                    className="px-8 py-4 bg-white rounded-sm hover:bg-gray-100 outline-none"
                                >
                                    Open Drawer {position}
                                </button>
                                <Drawer
                                    open={openDrawers[position]}
                                    position={position}
                                    onClose={() => toggleDrawer(position)}
                                >
                                    <div className='text-xl mb-2 font-bold'>Content for {position} drawer...</div>
                                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in ante velit. Mauris interdum faucibus tellus sed cursus. Quisque aliquet metus a orci posuere, vel ultrices nisi finibus. Morbi tristique dui nec nulla tincidunt viverra. Sed id convallis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris quis risus magna. Etiam in facilisis est, sed maximus justo. Sed et nisi tincidunt augue scelerisque congue quis eu lectus. Maecenas lacus nisl, venenatis eu volutpat quis, euismod a libero. Vivamus finibus est nec mi euismod, ullamcorper feugiat quam suscipit. Maecenas nec ante sapien. Aenean luctus non felis id finibus. Nulla congue venenatis laoreet. Ut et ex at elit consectetur scelerisque.</p>
                                </Drawer>
                            </div>
                        ))}
                    </div>
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
