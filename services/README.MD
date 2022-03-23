# Intent

Pre defined services

## PDF

```javascript
const makePDF = async () => {
    const pdf = new PDFCreatorService(`<h1>Hi There</h1>`);
    const p = await pdf.makePDF().catch(e => e); 

    if(p instanceof Error)
    console.log(p, 'Make sure AndroidManifest includes required permissions')


}

```