export const tool={
  "id": "E118",
  "slug": "eng-gaussian-beam",
  "title": "가우시안 레이저 빔 크기 계산기",
  "title_en": "Gaussian Beam Radius Calculator",
  "category": "광학",
  "category_en": "Optics",
  "fields": [
    {
      "key": "wavelength",
      "label": "진공 파장 λ₀",
      "label_en": "Vacuum wavelength λ₀",
      "dimension": "length",
      "example": 1e-06,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "0.001"
    },
    {
      "key": "waist",
      "label": "최소 빔 반지름 w₀",
      "label_en": "Minimum beam radius w₀",
      "dimension": "length",
      "example": 0.001,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "1"
    },
    {
      "key": "distance",
      "label": "허리부터 전파거리 z",
      "label_en": "Propagation distance from the waist z",
      "dimension": "length",
      "example": 3.141592653589793,
      "constraint": "signed",
      "display_unit": "m",
      "display_value": "3.1415926535897931"
    },
    {
      "key": "index",
      "label": "매질의 굴절률 n",
      "label_en": "Medium refractive index n",
      "dimension": "ratio",
      "example": 1,
      "constraint": "positive",
      "display_unit": "1",
      "display_value": "1"
    }
  ],
  "result_label": "광강도 1/e² 빔 반지름 w(z)",
  "result_label_en": "Intensity 1/e² beam radius w(z)",
  "result_dimension": "length",
  "formula": "w(z) = w₀√[1+(z/z_R)²], z_R=πnw₀²/λ₀",
  "purpose": "이상적인 가우시안 빔의 허리에서 떨어진 위치의 빔 반지름을 계산한다.",
  "purpose_en": "Calculate the radius of an ideal Gaussian beam at a distance from its waist.",
  "assumptions": "λ₀,w₀,n>0이며 z는 부호 있는 거리다. 반지름은 광강도가 축상 값의 1/e²가 되는 거리이며 지름이 아니다. 균질·등방·선형·무손실 매질 속 기본 TEM₀₀ 모드와 M²=1을 가정한다. 렌즈·조리개·비선형성은 제외한다. 근축 조건으로 λ₀/(πnw₀)≤0.1 rad를 요구한다. λ₀는 진공 파장이므로 매질 파장을 다시 n으로 나누어 넣지 않는다.",
  "assumptions_en": "Required: λ₀,w₀,n>0 and signed z. The radius is where intensity falls to 1/e² of its on-axis value. Assume a fundamental TEM₀₀ mode with M²=1 in a homogeneous isotropic linear lossless medium. Excluded: lenses, apertures and nonlinear propagation. The app enforces the paraxial condition λ₀/(πnw₀)≤0.1 rad. Enter the vacuum wavelength; the refractive index is applied internally.",
  "sources": [
    {
      "label": "MIT OCW · Fundamentals of photonics, Gaussian beams",
      "url": "https://www.ocw.mit.edu/courses/6-974-fundamentals-of-photonics-quantum-electronics-spring-2006/bf3bdeb971819ddc9c68719d28bb2745_classnotes.pdf"
    },
    {
      "label": "COMSOL · Gaussian beam theory",
      "url": "https://doc.comsol.com/6.3/doc/com.comsol.help.roptics/roptics_ug_optics.6.62.html"
    }
  ],
  "condition": "",
  "condition_en": "",
  "output_unit": "mm",
  "site": "https://nanalab.kr/eng-gaussian-beam/",
  "repository": "https://github.com/NaNaCompany/eng-gaussian-beam",
  "groups": []
};
