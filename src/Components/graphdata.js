
export default function fillGraphData(duration, length, analysisArray, analysisGraphData) {
    var i = 0
    while (analysisArray[i].start < 30) {
        analysisGraphData[i] = { x: analysisArray[i].start, y: duration / length }
        i++
    }

}
