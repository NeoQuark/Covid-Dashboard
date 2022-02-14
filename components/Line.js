import { ResponsiveLine } from '@nivo/line'

export default function Pie({data}) {
    const defaultData = [
        {
          "id": "japan",
          "color": "hsl(61, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 159
            },
            {
              "x": "helicopter",
              "y": 170
            },
            {
              "x": "boat",
              "y": 257
            },
            {
              "x": "train",
              "y": 50
            },
            {
              "x": "subway",
              "y": 292
            },
            {
              "x": "bus",
              "y": 261
            },
            {
              "x": "car",
              "y": 188
            },
            {
              "x": "moto",
              "y": 281
            },
            {
              "x": "bicycle",
              "y": 242
            },
            {
              "x": "horse",
              "y": 116
            },
            {
              "x": "skateboard",
              "y": 285
            },
            {
              "x": "others",
              "y": 41
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(132, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 99
            },
            {
              "x": "helicopter",
              "y": 281
            },
            {
              "x": "boat",
              "y": 16
            },
            {
              "x": "train",
              "y": 41
            },
            {
              "x": "subway",
              "y": 226
            },
            {
              "x": "bus",
              "y": 100
            },
            {
              "x": "car",
              "y": 56
            },
            {
              "x": "moto",
              "y": 161
            },
            {
              "x": "bicycle",
              "y": 233
            },
            {
              "x": "horse",
              "y": 222
            },
            {
              "x": "skateboard",
              "y": 245
            },
            {
              "x": "others",
              "y": 197
            }
          ]
        }
    ]

    return (
        <ResponsiveLine data={data? data : defaultData}
          margin={{ top: 50, right: 50, bottom: 110, left: 80 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 16,
              tickRotation: 0,
              legend: '',
              legendOffset: 48,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          enableGridX={false}
          lineWidth={3}
          pointSize={10}
          pointColor='#fff'
          pointBorderWidth={3}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableArea={true}
          enableSlices="x"
          crosshairType="y"
          legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 92,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
        />
    )
}