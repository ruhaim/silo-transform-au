import "./styles.css";
import sampleJson from "./output.json";
import { useState } from "react";

function transform(inputJSON, referenceId) {
  const { ProductDetail, QuotaDetail } = inputJSON;

  const outJson = {
    ...sampleJson,
    referenceId,
    productDetails: [
      {
        record_id: parseInt(ProductDetail[0].defaultValue),
        product: ProductDetail[1].defaultValue,
        category: ProductDetail[2].defaultValue,
        category_id: ProductDetail[3].defaultValue,
        currency: ProductDetail[4].defaultValue,
        price: ProductDetail[5].defaultValue,
        variant: ProductDetail[6].defaultValue,
        images: ProductDetail[7].defaultValue.split(" ").map((item) => {
          return `http://studio.gmisurveys.com/MiassetsResp/SiloAssets/uploads/${referenceId}/${item}`;
        }),
        q3questiontype: ProductDetail[9].defaultValue,
        //
        m_1834: parseInt(QuotaDetail[0].target),
        m_3554: parseInt(QuotaDetail[1].target),
        m_55: parseInt(QuotaDetail[2].target),
        f_1834: parseInt(QuotaDetail[3].target),
        f_3554: parseInt(QuotaDetail[4].target),
        f_55: parseInt(QuotaDetail[5].target),
        m_2134: parseInt(QuotaDetail[6].target),
        f_2134: parseInt(QuotaDetail[7].target),
        bm_1834: parseInt(QuotaDetail[8].target),
        bm_35: parseInt(QuotaDetail[9].target),
        bf_1834: parseInt(QuotaDetail[10].target),
        bf_35: parseInt(QuotaDetail[11].target),
        priority: parseInt(ProductDetail[22].defaultValue)
      }
    ]
  };
  return outJson;
}

export default function App() {
  const [outJson, setOutJson] = useState({});
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const inJSON = JSON.parse(ev.target.oldJSON.value);
          const referenceId = ev.target.referenceId.value;
          const outJSON = transform(inJSON, referenceId);
          setOutJson(outJSON);
          console.log({ inJSON, outJSON });
        }}
      >
        <label>Refid</label>
        <input name="referenceId" />
        <br />
        eg:1e2aa331-702e-48e0-9134-7163f0cf2faf
        <br />
        <label>in JSON</label>
        <textarea name="oldJSON" rows="8" />
        <button>Convert</button>
      </form>

      <label>AU Out</label>
      <br />
      <code style={{ textAlign: "left" }}>
        <pre>{JSON.stringify(outJson, null, 2)}</pre>
      </code>
    </div>
  );
}
