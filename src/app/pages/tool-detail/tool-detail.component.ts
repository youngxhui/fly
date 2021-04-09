import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
    selector: 'app-tool-detail',
    templateUrl: './tool-detail.component.html',
    styleUrls: ['./tool-detail.component.less']
})
export class ToolDetailComponent implements OnInit {
    chartOption: EChartsOption = {
        title: {
            text: '刀具磨损情况',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} mm'
            },
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
                lte: 6,
                color: 'green'
            },
                {
                    gt: 6,
                    lte: 16,
                    color: 'green',
                }, {
                    gt: 16,
                    color: 'red'
                }]
        },
        series: [
            {
                name: '用电量',
                type: 'line',
                smooth: true,
                data: [5, 6, 6, 7, 8, 5, 8, 9, 10, 11, 11, 12, 15, 14, 16, 17, 18, 18, 19, 21],
                markLine: {
                    label: {
                        formatter: '警戒值'
                    },
                    data: [
                        {yAxis: 18}
                    ]
                },

            },
        ]
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}
