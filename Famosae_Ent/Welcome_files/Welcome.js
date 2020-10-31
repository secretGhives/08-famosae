// Created by iWeb 2.0.2 local-build-20080129

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.13,offset:12.00}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWPhotoFrame([IWCreateImage('Welcome_files/notebook_ul.png'),IWCreateImage('Welcome_files/notebook_top.png'),IWCreateImage('Welcome_files/notebook_ur.png'),IWCreateImage('Welcome_files/notebook_right.png'),IWCreateImage('Welcome_files/notebook_lr.png'),IWCreateImage('Welcome_files/notebook_bottom.png'),IWCreateImage('Welcome_files/notebook_ll.png'),IWCreateImage('Welcome_files/notebook_left.png')],null,0,0.688076,3.000000,2.000000,1.000000,3.000000,18.000000,16.000000,17.000000,19.000000,76.000000,123.000000,79.000000,122.000000,null,null,null,0.400000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
