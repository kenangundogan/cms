"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";
import Underline from "@editorjs/underline";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Checklist from "@editorjs/checklist";
import InlineCode from "@editorjs/inline-code";
import Delimiter from "@editorjs/delimiter";

const Editor = ({ endpoint, id, onChange, initialData }) => {
    const editorRef = useRef(null);

    id = id || "editorjs";

    const [data, setData] = useState(initialData);

    async function fetchData() {
        try {
            const response = await axios.get(endpoint);
            setData(response.data);
        } catch (error) {
            setData(null);
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!data) return;

        if (editorRef.current) {
            editorRef.current.destroy();
            editorRef.current = null;
        }

        const editor = new EditorJS({
            holder: id,
            placeholder: "İçeriğinizi buraya yazın...",
            autofocus: true,
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: true,
                },
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: "https://im.haberturk.com", // Dosya yükleme API'si
                            byUrl: "https://im.haberturk.com", // URL'den yükleme
                        },
                    },
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                },
                code: CodeTool,
                embed: {
                    class: Embed,
                    inlineToolbar: true,
                },
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3,
                    },
                },
                marker: {
                    class: Marker,
                },
                underline: Underline,
                linkTool: {
                    class: LinkTool,
                    config: {
                        endpoint: "https://your-api.com/fetchUrl",
                    },
                },
                raw: RawTool,
                simpleImage: SimpleImage,
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                inlineCode: InlineCode,
                delimiter: Delimiter,
            },
            data: data || {},
            onChange: async () => {
                const content = await editor.save();
                onChange(content);
            },
        });

        editorRef.current = editor;

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
        };
    }, [data]);


    return <div id={id} className="editorjs w-full px-12"></div>;
};

export default Editor;
