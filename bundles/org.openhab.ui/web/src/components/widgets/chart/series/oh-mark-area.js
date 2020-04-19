import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/LocalizedFormat'
dayjs.extend(LocalizedFormat)

export default {
  get (component, points, startTime, endTime, chart) {
    const itemPoints = points.find(p => p.name === component.config.item).data
    let markArea = Object.assign({}, component.config)
    markArea.data = []
    let rollingState = null
    let currentArea = null
    itemPoints.forEach((p) => {
      if ((p.state === 'ON' && rollingState !== 'ON') || (p.state === 'OPEN' && rollingState !== 'OPEN')) {
        currentArea = [ { name: component.config.name, xAxis: new Date(p.time) } ]
      } else if (((p.state !== 'ON' && rollingState === 'ON') || (p.state !== 'OPEN' && rollingState === 'OPEN')) && currentArea) {
        currentArea.push({ xAxis: new Date(p.time) })
        currentArea[0].name = dayjs(currentArea[0].xAxis).format('llll') + ' > ' + dayjs(currentArea[1].xAxis).format('llll')
        markArea.data.push(currentArea)
        currentArea = null
      }
      rollingState = p.state
    })
    if (currentArea) {
      currentArea.push({ xAxis: endTime.toDate() })
      currentArea[0].name = dayjs(currentArea[0].xAxis).format('llll') + ' > ' + dayjs(currentArea[1].xAxis).format('llll')
      markArea.data.push(currentArea)
      currentArea = null
    }

    if (!component.config.label) markArea.label = { show: false }

    return markArea
  }
}
