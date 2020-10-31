// Created by iWeb 2.0 local-build-20070812

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="241" style="height: 241px; left: 35px; position: absolute; top: 60px; width: 300px; z-index: 1; "><param name="src" value="../../../../Media/redpanties.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="300" height="241" style="height: 241px; left: 35px; position: absolute; top: 60px; width: 300px; z-index: 1; "><param name="src" value="11_Jewels_Paradise_files/redpanties.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/redpanties.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="300" height="241" data="../../../../Media/redpanties.mov" style="height: 241px; left: 35px; position: absolute; top: 60px; width: 300px; z-index: 1; "><param name="src" value="../../../../Media/redpanties.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('11_Jewels_Paradise_files/notebook_ul.png'),IWCreateImage('11_Jewels_Paradise_files/notebook_top.png'),IWCreateImage('11_Jewels_Paradise_files/notebook_ur.png'),IWCreateImage('11_Jewels_Paradise_files/notebook_right.png'),IWCreateImage('11_Jewels_Paradise_files/notebook_lr.png'),IWCreateImage('11_Jewels_Paradise_files/notebook_bottom.png'),IWCreateImage('11_Jewels_Paradise_files/notebook_ll.png'),IWCreateImage('11_Jewels_Paradise_files/notebook_left.png')],null,0,1.000000,3.000000,2.000000,1.000000,3.000000,18.000000,16.000000,17.000000,19.000000,76.000000,123.000000,79.000000,122.000000,null,null,null,0.400000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('11_Jewels_Paradise_files/11_Jewels_ParadiseMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../../../Media/transparent.gif');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
