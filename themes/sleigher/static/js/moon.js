const lat = 42.389118;
const long = -71.097153;
const date = new Date();

const moonIllumination = SunCalc.getMoonIllumination(date);
const moonPosition = SunCalc.getMoonPosition(date, lat, long);

// counter clockwise
// radians, from north?
const brightLimbAngle = moonIllumination.angle - moonPosition.parallacticAngle;

// generating this image programmatically seems like a real pain in the ass

// maybe i should just make a bunch of images by hand that have both angle and phase.
// if i wanted to do 8 * 8 that would be just ... 64 ;_;
// invisible background, whitish illumination (new moon would look bad?)
