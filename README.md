# 가우시안 레이저 빔 크기 계산기

이상적인 가우시안 빔의 허리에서 떨어진 위치의 빔 반지름을 계산한다.

- ID: E118
- App: https://nanalab.kr/eng-gaussian-beam/
- Repository: https://github.com/NaNaCompany/eng-gaussian-beam
- Formula: w(z) = w₀√[1+(z/z_R)²], z_R=πnw₀²/λ₀

## Model and data

λ₀,w₀,n>0이며 z는 부호 있는 거리다. 반지름은 광강도가 축상 값의 1/e²가 되는 거리이며 지름이 아니다. 균질·등방·선형·무손실 매질 속 기본 TEM₀₀ 모드와 M²=1을 가정한다. 렌즈·조리개·비선형성은 제외한다. 근축 조건으로 λ₀/(πnw₀)≤0.1 rad를 요구한다. λ₀는 진공 파장이므로 매질 파장을 다시 n으로 나누어 넣지 않는다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
