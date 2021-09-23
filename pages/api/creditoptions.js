// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      "response": [
          {
              "typeCode": "veryPayContent_div",
              "versionId": "vp_0001",
              "markUp": ""
          },
          {
              "typeCode": "veryPayContent_modal1",
              "versionId": "vp_0001",
              "markUp": ""
          }
      ]
    }
  )
}
