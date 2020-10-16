import React from "react";

class FruitForms extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Form Pembelian Buah</h1>
                <form>
                    <div className="form-group">
                        <div className="label"><b>Nama Pelanggan</b></div>
                        <input className="field" type="text" name="name" />
                    </div>
                    <div className="form-group">
                        <div className="label"><b>Daftar Item</b></div>
                        <div className="field">
                            <input type="checkbox" className="checkbox" name="semangka" value="Semangka" />
                            <label htmlFor="semangka"> Semangka</label><br />
                            <input type="checkbox" className="checkbox" name="jeruk" value="Jeruk" />
                            <label htmlFor="jeruk"> Jeruk</label><br />
                            <input type="checkbox" className="checkbox" name="nanas" value="Nanas" />
                            <label htmlFor="nanas"> Nanas</label><br />
                            <input type="checkbox" className="checkbox" name="salak" value="Salak" />
                            <label htmlFor="salak"> Salak</label><br />
                            <input type="checkbox" className="checkbox" name="anggur" value="Anggur" />
                            <label htmlFor="anggur"> Anggur</label>
                        </div>
                    </div>

                    <input className="form-button" type="submit" value="Kirim" />
                </form>
            </div>);
    }
}

export default FruitForms;