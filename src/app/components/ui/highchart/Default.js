"use client";

import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import axios from "axios";

// Kullanıcı tarafından seçilebilen tarih aralıkları
const dateRanges = [
    { label: "1 Gün", value: 1 },
    { label: "1 Hafta", value: 7 },
    { label: "1 Ay", value: 30 },
    { label: "3 Ay", value: 90 },
    { label: "6 Ay", value: 180 }
];

// Nested objelerde dinamik key erişimi için fonksiyon
const getNestedValue = (obj, keyPath) => {
    return keyPath.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
};

const HighChartDefault = ({
    endpoint,
    responseMapping,
    limitKey,
    dateKey,
    title,
    subtitle,
    xAxisTitle = "",
    yAxisTitle = "",
    tooltipSuffix,
    chartId = "chart-container",
    type = "column",
    size = { width: "100%", height: "400px" },
}) => {
    const [chartData, setChartData] = useState({ categories: [], counts: [] });
    const [dateRange, setDateRange] = useState(30);
    const [totalItems, setTotalItems] = useState(0);
    const [filteredTotal, setFilteredTotal] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 📌 İlk isteği at, meta bilgilerini al
                const firstResponse = await axios.get(`${endpoint}?page=1&limit=1`);
                const metaData = firstResponse.data;

                // Nested objeden `limitKey` al
                const totalItemsFromAPI = limitKey ? getNestedValue(metaData, limitKey) : firstResponse.data.length;

                setTotalItems(totalItemsFromAPI);

                // 📌 API'den tüm verileri çek
                const response = await axios.get(`${endpoint}?page=1&limit=${totalItemsFromAPI}`);
                const allData = responseMapping.data
                    ? getNestedValue(response.data, responseMapping.data)
                    : response.data;

                const now = new Date();
                const startDate = new Date(now);
                startDate.setDate(now.getDate() - dateRange);

                // 📌 Tarihe göre filtreleme yap
                const filteredData = allData.filter((item) => {
                    const itemDate = new Date(item[dateKey]);
                    return itemDate >= startDate;
                });

                setFilteredTotal(filteredData.length); // **Seçilen tarih aralığındaki toplam kayıt sayısı**

                // 📌 Tarihleri gruplandır ve say
                const groupedData = filteredData.reduce((acc, item) => {
                    const formattedDate = item[dateKey].split("T")[0];
                    acc[formattedDate] = (acc[formattedDate] || 0) + 1;
                    return acc;
                }, {});

                // 📌 Highcharts için X ekseni ve Y ekseni ayarla
                const categories = Object.keys(groupedData).sort();
                const counts = categories.map((date) => groupedData[date]);

                setChartData({ categories, counts });
            } catch (error) {
                console.error("API'den veri çekilemedi:", error);
            }
        };

        fetchData();
    }, [endpoint, dateRange]);

    useEffect(() => {
        if (chartData.categories.length > 0) {
            Highcharts.chart(chartId, {
                chart: {
                    type: type,
                },
                title: {
                    text: title
                },
                subtitle: {
                    text: subtitle
                },
                xAxis: xAxisTitle
                    ? { categories: chartData.categories, crosshair: true, title: { text: xAxisTitle } }
                    : { categories: chartData.categories, crosshair: true },
                yAxis: yAxisTitle
                    ? { min: 0, title: { text: yAxisTitle } }
                    : { min: 0, title: null },
                tooltip: {
                    valueSuffix: ` ${tooltipSuffix}`
                },
                series: [{
                    name: yAxisTitle || "",
                    data: chartData.counts,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#000000',
                        inside: true,
                        verticalAlign: 'top',
                        // format: '{point.y:.1f}', // one decimal
                        y: 10,
                        style: {
                            fontSize: '12px',
                        }
                    }
                }],
                credits: { enabled: false },
                exporting: { enabled: true }
            });
        }
    }, [chartData]);

    return (
        <div>
            <div className="w-full flex justify-between items-center mb-4">
                <div className="text-xs">
                    <label htmlFor="dateRange">Tarih Aralığı: </label>
                    <select
                        id="dateRange"
                        value={dateRange}
                        onChange={(e) => setDateRange(Number(e.target.value))}
                    >
                        {dateRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                                {range.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="text-xs">
                    <p>Toplam Kayıt: {totalItems} / {filteredTotal}</p>
                </div>
            </div>
            <div id={chartId} style={{ width: size.width, height: size.height }}></div>
        </div>
    );
};

export default HighChartDefault;
