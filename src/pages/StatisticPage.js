import React from "react"
import PageContainer from "../containers/PageContainer";
import { Paper, Typography} from "@material-ui/core";
import {Line} from 'react-chartjs-2';

export const StatisticPage = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 1,
                }
            }]
        },
    }

    const chartData = {
        labels: ['17.08.2021', '18.08.2021', '19.08.2021', '20.08.2021', '21.08.2021', '22.08.2021',
            '23.08.2021', '24.08.2021', '25.08.2021', '26.08.2021', '27.08.2021', '28.08.2021'],
        datasets: [
            {
                label: 'Рога и копыта',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(255,134,0)',
                borderColor: 'rgb(255,134,0)',
                borderCapStyle: 'butt',
                borderJoinStyle: 'miter',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [55, 47, 77, 56, 36, 99, 55, 47, 77, 56, 36, 99]
            },
            {
                label: 'Висдом лаб',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(0,159,255)',
                borderColor: 'rgb(0,159,255)',
                borderCapStyle: 'butt',
                borderJoinStyle: 'miter',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [222, 235, 55, 224, 333, 22, 222, 235, 55, 224, 333]
            },
            {
                label: 'Блаблабла',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(248,104,104)',
                borderColor: 'rgb(248,104,104)',
                borderCapStyle: 'butt',
                borderJoinStyle: 'miter',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [33, 33, 45, 23, 33, 66, 33, 33, 45, 23, 33, 66]
            },
        ]
    }

    return (
        <PageContainer>
            <Typography variant={'h5'}>Моя аналитика</Typography>
            <Paper variant={'outlined'} sx={{ p: 2, mt: 1, height: 500 }}>
                <Typography variant={'h6'}>Посещаемость мероприятий за последний месяц</Typography>
                <Line data={chartData} options={options} type={null} />
            </Paper>
        </PageContainer>
    )
}
