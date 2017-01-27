declare var CGSize, SimplePDF;
import * as fs from 'file-system';

export class TNSPdf {

  public make(title: string) {
    let A4paperSize = new CGSize({ width: 595, height: 842 });
    let pdf = new SimplePDF({ pageSize: A4paperSize, pageMargin: 20 });

    pdf.addText(title);
    // pdf.addImage( anImage )

    // let dataArray = [["Test1", "Test2"],["Test3", "Test4"]]
    // pdf.addTable(rowCount: 2, columnCount: 2, rowHeight: 20.0, columnWidth: 30.0, tableLineWidth: 1.0, font: UIFont.systemFontOfSize(5.0), dataArray: dataArray)

    let pdfData = pdf.generatePDFdata();

    let documents = fs.knownFolders.documents();
    let path = fs.path.join(documents.path, 'test.pdf');
  
    // save as a local file
    pdfData.writeToFileAtomically(path, true);
    console.log(path);
  }  
}