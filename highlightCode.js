function showSourceJS()
{
    var jsString = myScript.text

    jsString = jsString.replace(/\</g, "&lt;")
    jsString = jsString.replace(/\>/g, "&gt;")
    jsCodeDiv.innerHTML = '<pre><code id="codeJS" class="javascript">'+jsString+'</code></pre>'

    var aCode = document.getElementById('codeJS');
    hljs.highlightBlock(aCode);

}
function showSourceSVG()
{
    var svgString = svgDiv.innerHTML
    svgString = svgString.replace(/\</g, "&lt;")
    svgString = svgString.replace(/\>/g, "&gt;\n")
    svgSourceDiv.innerHTML = '<pre><code id="codeSVG" class="xml">'+svgString+'</code></pre>'

    var aCode = document.getElementById('codeSVG');

    hljs.highlightBlock(aCode);

    svgSourceDiv.style.height = +svgSourceDiv.scrollHeight+"px"

}
function showPublishSVG()
{

wrapper.appendChild(domChartG)
var bb=wrapper.getBBox()
mySVG.appendChild(domChartG)
var bbw=bb.width
var bbh=bb.height


   var NS="http://www.w3.org/2000/svg"
    var publishSVG = document.createElementNS(NS,"svg")



    publishSVG.setAttribute("id", "chartSVG")
    publishSVG.setAttribute("width", bbw)
    publishSVG.setAttribute("height", bbh)
    var clone=domChartG.cloneNode(true)
    publishSVG.appendChild(clone)

    var svgString = new XMLSerializer().serializeToString(publishSVG)


  svgString = svgString.replace(/\</g, "&lt;")
  svgString = svgString.replace(/\>/g, "&gt;\n")



    svgPublishDiv.innerHTML = '<pre><code  id="saveSVG" class="xml">'+svgString+'</code></pre>'


       var sCode = document.getElementById('saveSVG');

    hljs.highlightBlock(sCode);


}
