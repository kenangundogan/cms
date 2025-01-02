'use client';
import React, { useState } from 'react';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Modal from '@/app/components/ui/modal/Modal';

const generateBasicExample = () => {
    return {
        JS: `
<button onClick={() => setOpenModal(true)}>
    Open Modal
</button>
<Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
    <Modal.Head>
        Modal Title
    </Modal.Head>

    <Modal.Body>
        <p>This is the body of the modal. You can add any content here.</p>
    </Modal.Body>

    <Modal.Foot>
        <p>This is the footer of the modal. You can add Buttons here.</p>
    </Modal.Foot>
</Modal>
`,
    };
};

const SampleExample = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Example>
            <Example.Title>Sample Usage</Example.Title>
            <Example.Description>
                This is a basic example of the Modal component. Click the button to open the modal.
            </Example.Description>
            <Example.Body>
                <div className='p-4'>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="px-8 py-4 bg-white rounded-sm hover:bg-gray-100"
                    >
                        Open Modal
                    </button>
                </div>
                <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Head>
                        Modal Title
                    </Modal.Head>

                    <Modal.Body>
                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Modal.Body>

                    <Modal.Foot>
                        <button
                            onClick={() => setOpenModal(false)}
                            className="px-6 py-3 bg-red-600 text-white text-sm hover:bg-red-700"
                        >
                            Close Modal
                        </button>
                    </Modal.Foot>
                </Modal>
                <CodeCard codeSnippets={generateBasicExample()} />
            </Example.Body>
        </Example>
    );
};

export default SampleExample;
