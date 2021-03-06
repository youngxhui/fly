import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EChartsOption, getInstanceByDom } from 'echarts';
import { WebsocketService } from '../../service/websocket.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Wear } from '../../../proto/wear.pb';

@Component({
    selector: 'app-tool-detail',
    templateUrl: './tool-detail.component.html',
    styleUrls: ['./tool-detail.component.less']
})
export class ToolDetailComponent implements OnInit, OnDestroy {

    @ViewChild('lineCharts')
    lineCharts: ElementRef;

    wearTool = [5, 6, 6, 7, 8, 8, 8, 9, 10, 11, 11, 12, 15, 14, 16, 17, 18, 18, 19, 21];
    wearTime = ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00',
        '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'];

    chartOption: EChartsOption = {
        title: {
            text: '刀具磨损情况',
            subtext: '虚构数据'
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
            data: this.wearTime
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
                color: '#40A9FF'
            },
                {
                    gt: 6,
                    lte: 16,
                    color: '#40A9FF',
                }, {
                    gt: 16,
                    color: '#FF5653'
                }]
        },
        series: [
            {
                name: '损耗',
                type: 'line',
                smooth: true,
                data: this.wearTool,
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
    ws: WebSocketSubject<any>;

    toolId: number;

    constructor(private websocketService: WebsocketService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.toolId = this.route.snapshot.params.id;
        console.log(this.toolId);
        // @ts-ignore
        this.ws = webSocket({
            url: 'ws://localhost:8080',
            binaryType: 'arraybuffer',
            deserializer: (message: MessageEvent) => message.data,
            serializer: (message: Wear) => message.serializeBinary()
        });
        this.ws.pipe(map(
            (res: ArrayBuffer) => {
                return Wear.deserializeBinary(res);
            }
        )).subscribe((res: Wear) => {
            this.wearTool.shift();
            this.wearTime.shift();
            this.wearTool.push(Number(res.loss));
            this.wearTime.push(res.date);
            this.chartOption.series[0].data = this.wearTool;
            // @ts-ignore
            this.chartOption.xAxis.data = this.wearTime;
            getInstanceByDom(this.lineCharts.nativeElement).setOption(this.chartOption);
        }, err => {
            console.log(err);
        }, () => {
            console.log('complete');
        });
        const wear = new Wear();
        wear.id = this.toolId;
        this.ws.next(wear);
    }

    ngOnDestroy(): void {
        console.log('ngOnDestory');
        this.ws.unsubscribe();
        this.ws.complete();
    }


}
