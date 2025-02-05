'use client';
import React, { useState } from "react";
import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import BoxWrapper from '@/app/components/ui/box/BoxWrapper';
import Box from '@/app/components/ui/box/Box';
import Form from '@/app/components/ui/form/Form';
import Button from "@/app/components/ui/button/Button";
import TextField from "@/app/components/ui/textfield/TextField";
import Autocomplete from "@/app/components/ui/autocomplete/Autocomplete";
import DateTimePicker from "@/app/components/ui/datetimepicker/DateTimePicker";
import Select from "@/app/components/ui/select/Select";
import Checkbox from "@/app/components/ui/checkbox/Checkbox";
import Image from 'next/image';

const DashboardPage = () => {
    const [singleValue, setSingleValue] = useState("");
    const [checkboxStates, setCheckboxStates] = useState({
        reklam: false
    });

    const handleCheckboxChange = (key, isChecked) => {
        setCheckboxStates((prev) => ({
            ...prev,
            [key]: isChecked,
        }));
    };
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Haber</Breadcrumb.Item>
                <Breadcrumb.Item>Ekle</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Haber</PageInfo.Title>
                <PageInfo.Description>Haber ekleme sayfası burada yer alacak.</PageInfo.Description>
            </PageInfo>

            <BoxWrapper className="flex flex-col lg:flex-row">
                <BoxWrapper className="w-full">
                    <Box boxName="newsTitle" className="w-full">
                        <Box.Head>Başlık</Box.Head>
                        <Box.Body>
                            <Form className="flex flex-col gap-4">
                                <TextField
                                    label="Varsayılan"
                                    id="varsayılan"
                                    name="varsayılan"
                                    type="text"
                                    placeholder="varsayılan başlık giriniz..."
                                />
                                <TextField
                                    label="Seo"
                                    id="seo"
                                    name="seo"
                                    type="text"
                                    placeholder="seo başlık giriniz..."
                                />
                                <TextField
                                    label="Kısa"
                                    id="kısa"
                                    name="kısa"
                                    type="text"
                                    placeholder="kısa başlık giriniz..."
                                />
                            </Form>
                        </Box.Body>
                    </Box>
                    <Box boxName="newsSpot" className="w-full">
                        <Box.Head>Spot</Box.Head>
                        <Box.Body>
                            <Form className="flex flex-col gap-4">
                                <TextField
                                    label="Varsayılan"
                                    id="varsayılan"
                                    name="varsayılan"
                                    type="text"
                                    placeholder="varsayılan spot giriniz..."
                                />
                                <TextField
                                    label="Seo"
                                    id="seo"
                                    name="seo"
                                    type="text"
                                    placeholder="seo spot giriniz..."
                                />
                                <TextField
                                    label="Kısa"
                                    id="kısa"
                                    name="kısa"
                                    type="text"
                                    placeholder="kısa spot giriniz..."
                                />
                            </Form>
                        </Box.Body>
                    </Box>
                    <Box boxName="newsContent" className="w-full">
                        <Box.Head>İçerik</Box.Head>
                        <Box.Body>
                            <Form className="flex flex-col gap-4">
                                <TextField
                                    label=""
                                    id="content"
                                    name="content"
                                    type="textarea"
                                    rows="20"
                                    placeholder="İçerik giriniz..."
                                />
                            </Form>
                        </Box.Body>
                    </Box>
                </BoxWrapper>
                <BoxWrapper className="w-full lg:w-96 flex-none">
                    <Box boxName="newsAction">
                        <Box.Body>
                            <div className="flex gap-4">
                                <Select value={singleValue} onChange={setSingleValue}>
                                    <Select.Option value="1">Taslak</Select.Option>
                                    <Select.Option value="2">Yayında</Select.Option>
                                    <Select.Option value="3">Hazırlanan</Select.Option>
                                    <Select.Option value="4">Onay Bekleyen</Select.Option>
                                </Select>
                                <Button variant="primary">Kaydet</Button>
                            </div>
                        </Box.Body>
                    </Box>
                    <Box boxName="newsEditors">
                        <Box.Head>Düzenleme Yapanlar</Box.Head>
                        <Box.Body>
                            <ul className='text-xs flex gap-4 overflow-y-auto'>
                                <li>
                                    <div className='relative z-10 overflow-hidden rounded-full w-20 h-20 border-2 mb-1'>
                                        <Image src="/assets/images/avatar/1.png" alt="User" width={80} height={80} />
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span>Kenan</span>
                                        <span>Gündoğan</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='relative z-10 overflow-hidden rounded-full w-20 h-20 border-2 mb-1'>
                                        <Image src="/assets/images/avatar/2.png" alt="User" width={80} height={80} />
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span>Kenan</span>
                                        <span>Gündoğan</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='relative z-10 overflow-hidden rounded-full w-20 h-20 border-2 mb-1'>
                                        <Image src="/assets/images/avatar/3.png" alt="User" width={80} height={80} />
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span>Kenan</span>
                                        <span>Gündoğan</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='relative z-10 overflow-hidden rounded-full w-20 h-20 border-2 mb-1'>
                                        <Image src="/assets/images/avatar/4.png" alt="User" width={80} height={80} />
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <span>Kenan</span>
                                        <span>Gündoğan</span>
                                    </div>
                                </li>
                            </ul>
                        </Box.Body>
                    </Box>
                    <Box boxName="newsDate">
                        <Box.Head>Tarih</Box.Head>
                        <Box.Body>
                            <div className="flex flex-col gap-4">
                                <DateTimePicker
                                    label="Oluşturulma Tarihi"
                                    id="datetime-picker"
                                    name="datetime"
                                    mode="datetime"
                                    placeholder="Tarih ve saat seçiniz"
                                    onChange={(value) => console.log("Seçilen Tarih ve Saat:", value)}
                                    disabled
                                />

                                <DateTimePicker
                                    label="Yayınlanma Tarihi"
                                    id="datetime-picker"
                                    name="datetime"
                                    mode="datetime"
                                    placeholder="Tarih ve saat seçiniz"
                                    onChange={(value) => console.log("Seçilen Tarih ve Saat:", value)}
                                    disabled
                                />

                                <DateTimePicker
                                    label="Güncelleme Tarihi"
                                    id="datetime-picker"
                                    name="datetime"
                                    mode="datetime"
                                    placeholder="Tarih ve saat seçiniz"
                                    onChange={(value) => console.log("Seçilen Tarih ve Saat:", value)}
                                    disabled
                                />
                            </div>
                        </Box.Body>
                    </Box>
                    <Box boxName="newsOthers">
                        <Box.Head>Diğer</Box.Head>
                        <Box.Body>
                            <div className="flex flex-col gap-4">
                                <Autocomplete
                                    endpoint="/api/content/category"
                                    name="Kategori"
                                    responseMapping={{ data: "data" }}
                                    searchKey="name"
                                    minChars={1}
                                    displayFields={["name"]}
                                    itemKeyField="id"
                                    selectedValueField="name"
                                    size="md"
                                    placeholder="Kategori ara..."
                                />
                                <Autocomplete
                                    endpoint="/api/content/source"
                                    name="Kaynak"
                                    responseMapping={{ data: "data" }}
                                    searchKey="name"
                                    minChars={1}
                                    displayFields={["name"]}
                                    itemKeyField="id"
                                    selectedValueField="name"
                                    size="md"
                                    placeholder="Kaynak ara..."
                                />
                                <Autocomplete
                                    endpoint="/api/content/writtenby"
                                    name="Yazan"
                                    responseMapping={{ data: "data" }}
                                    searchKey="fullname"
                                    minChars={1}
                                    displayFields={["fullname"]}
                                    itemKeyField="id"
                                    selectedValueField="fullname"
                                    size="md"
                                    placeholder="Yazan ara..."
                                />
                                <Autocomplete
                                    endpoint="/api/content/positivenegative"
                                    name="Olumlu/Olumsuz"
                                    responseMapping={{ data: "data" }}
                                    searchKey="name"
                                    minChars={1}
                                    displayFields={["name"]}
                                    itemKeyField="id"
                                    selectedValueField="name"
                                    size="md"
                                    placeholder="Olumlu/Olumsuz ara..."
                                />
                                <Autocomplete
                                    endpoint="/api/content/mortalimmortal"
                                    name="Ölümlü/Ölümsüz"
                                    responseMapping={{ data: "data" }}
                                    searchKey="name"
                                    minChars={1}
                                    displayFields={["name"]}
                                    itemKeyField="id"
                                    selectedValueField="name"
                                    size="md"
                                    placeholder="Ölümlü/Ölümsüz ara..."
                                />
                            </div>
                        </Box.Body>
                    </Box>
                    <Box boxName="newsChoices">
                        <Box.Head>Seçenekler</Box.Head>
                        <Box.Body>
                            <Checkbox label="Reklam" shape="square" variantType="outline" variant="black" checked={checkboxStates.reklam} onChange={(isChecked) => handleCheckboxChange("reklam", isChecked)} />
                            <Checkbox label="Özel İçerik" shape="square" variantType="outline" variant="black" checked={checkboxStates.ozelicerik} onChange={(isChecked) => handleCheckboxChange("ozelicerik", isChecked)} />
                            <Checkbox label="Listelenmeyen Haber" shape="square" variantType="outline" variant="black" checked={checkboxStates.listelenmeyenhaber} onChange={(isChecked) => handleCheckboxChange("listelenmeyenhaber", isChecked)} />
                        </Box.Body>
                    </Box>
                </BoxWrapper>
            </BoxWrapper>
        </div>
    );
};

export default DashboardPage;
