export async function GET(req) {
    try {
        const data = {
            "time": 1738846750230,
            "blocks": [
                {
                    "id": "11-1ufEsWZ",
                    "type": "header",
                    "data": {
                        "text": "Heading 1",
                        "level": 1
                    }
                },
                {
                    "id": "F8-QlUg25L",
                    "type": "header",
                    "data": {
                        "text": "Heading 2",
                        "level": 2
                    }
                },
                {
                    "id": "yROUOSoMkP",
                    "type": "header",
                    "data": {
                        "text": "Heading 3",
                        "level": 3
                    }
                },
                {
                    "id": "_qWB2h8cEZ",
                    "type": "header",
                    "data": {
                        "text": "Heading 4",
                        "level": 4
                    }
                },
                {
                    "id": "dMXzGmzE91",
                    "type": "header",
                    "data": {
                        "text": "Heading 5",
                        "level": 5
                    }
                },
                {
                    "id": "LWnNC-9qfg",
                    "type": "header",
                    "data": {
                        "text": "Heading 6",
                        "level": 6
                    }
                },
                {
                    "id": "FhjmXLVgaP",
                    "type": "paragraph",
                    "data": {
                        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
                },
                {
                    "id": "WawJFeaRZd",
                    "type": "paragraph",
                    "data": {
                        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <b>dummy</b> text ever since the 1500s, when an unknown printer took a <b>galley</b> of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into <i>electronic</i> typesetting, remaining <u class=\"cdx-underline\">essentially</u> unchanged. It was popularised in the 1960s with the <code class=\"inline-code\">release</code> of Letraset sheets containing Lorem Ipsum <a href=\"https://www.google.com.tr\">passages</a>, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
                },
                {
                    "id": "UKPQBC8MXx",
                    "type": "list",
                    "data": {
                        "style": "unordered",
                        "meta": {},
                        "items": [
                            {
                                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "meta": {},
                                "items": []
                            }
                        ]
                    }
                },
                {
                    "id": "vOGSudIMR5",
                    "type": "list",
                    "data": {
                        "style": "unordered",
                        "meta": {},
                        "items": [
                            {
                                "content": "Aenean sed ipsum quis arcu venenatis bibendum a nec nulla.",
                                "meta": {},
                                "items": []
                            }
                        ]
                    }
                },
                {
                    "id": "U3RXsxhyON",
                    "type": "list",
                    "data": {
                        "style": "unordered",
                        "meta": {},
                        "items": [
                            {
                                "content": "Nunc vel ligula et diam condimentum aliquet nec sed nulla.",
                                "meta": {},
                                "items": []
                            }
                        ]
                    }
                },
                {
                    "id": "wurLcJOzN6",
                    "type": "list",
                    "data": {
                        "style": "unordered",
                        "meta": {},
                        "items": [
                            {
                                "content": "In auctor massa non velit fermentum, id condimentum quam rhoncus.",
                                "meta": {},
                                "items": []
                            }
                        ]
                    }
                },
                {
                    "id": "-4-M59E5i_",
                    "type": "paragraph",
                    "data": {
                        "text": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                    }
                },
                {
                    "id": "wA3se1arrn",
                    "type": "list",
                    "data": {
                        "style": "ordered",
                        "meta": {
                            "counterType": "numeric"
                        },
                        "items": [
                            {
                                "content": "In dignissim mauris id arcu convallis pharetra. ",
                                "meta": {},
                                "items": []
                            },
                            {
                                "content": "Nunc non metus nec neque eleifend tristique. ",
                                "meta": {},
                                "items": []
                            },
                            {
                                "content": "Etiam commodo enim eget aliquet dictum. ",
                                "meta": {},
                                "items": []
                            },
                            {
                                "content": "Maecenas ac lacus tempor, imperdiet ante eget, finibus ligula. ",
                                "meta": {},
                                "items": []
                            }
                        ]
                    }
                },
                {
                    "id": "YJ4OWy0FMs",
                    "type": "quote",
                    "data": {
                        "text": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
                        "caption": "Where does it come from?",
                        "alignment": "left"
                    }
                },
                {
                    "id": "5rzktPpiXG",
                    "type": "table",
                    "data": {
                        "withHeadings": false,
                        "stretched": false,
                        "content": [
                            [
                                "<b>Name</b>",
                                "<b>Surname</b>",
                                "<b>Phone</b>"
                            ],
                            [
                                "Kenan",
                                "Gündoğan",
                                "+90 987 654 321"
                            ],
                            [
                                "Josep",
                                "Santano",
                                "+90 987 654 321"
                            ]
                        ]
                    }
                },
                {
                    "id": "3tjQGJv2aV",
                    "type": "linkTool",
                    "data": {
                        "link": "https://codex.so",
                        "meta": {
                            "title": "CodeX Team",
                            "site_name": "CodeX",
                            "description": "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
                            "image": {
                                "url": "https://codex.so/public/app/img/meta_img.png"
                            }
                        }
                    }
                }
            ],
            "version": "2.31.0-rc.7"
        };

        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "An error occurred." }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
