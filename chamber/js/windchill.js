let t = parseFloat(document.querySelector('#temperature').textContent)
let s = parseFloat(document.querySelector('#windSpeed').textContent)
 
function windChillCalculate(t, s){
    if (t<=50){
        if (s > 3.0){
            const wc = Math.round(35.74 + (0.6215 * t) - (35.75 * s) **0.16 + (0.4275 * t * s) **0.16)
            return wc
        } else {
            const wc = 'N/A'
            return wc
        }
    } else {
        const wc = 'N/A'
        return wc
    }
}
let windChill = document.getElementById('windChill').innerHTML = windChillCalculate(t,s);