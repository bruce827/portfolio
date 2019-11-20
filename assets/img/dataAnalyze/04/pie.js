app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:[
            'Bloker',
            'Critical',
            'Major',
            'Minor',
            'Trivial'
            ]
    },
    color:['#E3D26F','#CA895F','#A15E49','#4E3822','#2F1B25'],
    series: [
        {
            name:'种类细分',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'Bloker', },
                {value:79, name:'Critical',
                // selected:true
                    
                },
                {value:548, name:'Major'},
                {value:158, name:'Minor'},
                {value:120, name:'Trivial'}
            ]
        },
        {
            name:'种类细分',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:235, name:'功能设计与需求严重不符',
                    itemStyle:{
                        color:'#E8DA89'
                    }
                },
                {value:100, name:'500错误',
                     itemStyle:{
                        color:'#BAAC5B'
                    }
                },
                
                {value:9, name:'功能未实现',
                     itemStyle:{
                        color:'#DDB399'
                    }
                },
                {value:70, name:'功能错误',
                     itemStyle:{
                        color:'#CA895F'
                    }
                },
                {value:100, name:'操作界面错误',
                    itemStyle:{
                        color:'#C3988B'
                    }
                },
                 {value:64, name:'兼容性问题 ',
                    itemStyle:{
                        color:'#B27B6A'
                    },
                    
                },
                
                {value:80, name:'边界条件下错误',
                    itemStyle:{
                        color:'#A15E49'
                    },
                    labelLine:{
                        length:60
                    }
                },
                {value:100, name:'提示信息错误',
                    itemStyle:{
                        color:'#844D3C'
                    }
                },
                {value:102, name:'系统未优化',
                    itemStyle:{
                        color:'#673C2F'
                    },
                    
                },
                {value:102, name:'光标定位错误',
                    itemStyle:{
                        color:'#4A2B22'
                    },
                    
                },
                
                 {value:50, name:'界面格式等不规范',
                    itemStyle:{
                        color:'#7E6E5E'
                    },
                    
                },
                 {value:108, name:'操作时未给用户提示',
                    itemStyle:{
                        color:'#4E3822'
                    },
                    
                },
                {value:120, name:'个别不影响产品理解的错别字',
                    itemStyle:{
                        color:'#2F1B25'
                    },
                    
                },
                 
            ]
        }
    ]
};