import React from "react";

class Header extends React.Component {
    render() {
        return <th>{this.props.item}</th>
    }
}

class Detail extends React.Component {
    render() {
        return <td>{this.props.item}</td>
    }
}


class Forms extends React.Component {
    constructor(props) {
        super(props)
        let dataHargaBuah = [
            { nama: "Semangka", harga: 10000, berat: 1000 },
            { nama: "Anggur", harga: 40000, berat: 500 },
            { nama: "Strawberry", harga: 30000, berat: 400 },
            { nama: "Jeruk", harga: 30000, berat: 1000 },
            { nama: "Mangga", harga: 30000, berat: 500 }
        ]
        this.state = {
            buah: dataHargaBuah,
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            index: ""
        }

        this.handleEdit = this.handleEdit.bind(this)
        this.handleChangeNama = this.handleChangeNama.bind(this)
        this.handleChangeHarga = this.handleChangeHarga.bind(this)
        this.handleChangeBerat = this.handleChangeBerat.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    render() {
        return (
            <div className="App">
                <h1 style={{ marginTop: "10px" }}>Tabel Harga Buah</h1>
                <table>
                    <thead>
                        <tr id="header">
                            <Header id="nama" item="Nama" />
                            <Header id="harga" item="Harga" />
                            <Header id="berat" item="Berat" />
                            <Header id="edit" item="Edit" />
                            <Header id="delete" item="Delete" />
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.buah.map((el, index) => {
                            return (
                                <>
                                    <tr>
                                        <Detail item={el.nama} />
                                        <Detail item={el.harga} />
                                        <Detail item={el.berat / 1000 + " kg"} />
                                        <td><button value={index} onClick={this.handleEdit}>Edit</button></td>
                                        <td><button value={index} onClick={this.handleDelete}>Delete</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
                <br />
                <form style={{ textAlign: "center" }} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <div className="label"><b>Nama Buah</b></div>
                        <input className="field" type="text" name="nama" required onChange={this.handleChangeNama} value={this.state.inputNama} />
                    </div>
                    <div className="form-group">
                        <div className="label"><b>Harga</b></div>
                        <input className="field" type="text" name="harga" required onChange={this.handleChangeHarga} value={this.state.inputHarga} />
                    </div>
                    <div className="form-group">
                        <div className="label"><b>Berat</b></div>
                        <input className="field" type="text" name="berat" required onChange={this.handleChangeBerat} value={this.state.inputBerat} />
                    </div>
                    <input className="form-button" type="submit" value="Submit" />
                </form>
            </div>);
    }

    handleEdit(event) {
        let index = event.target.value
        this.setState({
            inputNama: this.state.buah[index].nama,
            inputHarga: this.state.buah[index].harga,
            inputBerat: this.state.buah[index].berat,
            index: index
        })
    }

    handleChangeNama(event) {
        this.setState({
            inputNama: event.target.value
        })
    }

    handleChangeHarga(event) {
        this.setState({
            inputHarga: event.target.value
        })
    }

    handleChangeBerat(event) {
        this.setState({
            inputBerat: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        let newNama = event.target.nama.value
        let newHarga = event.target.harga.value
        let newBerat = event.target.berat.value

        this.state.buah[this.state.index] = {
            nama: newNama,
            harga: newHarga,
            berat: newBerat
        }

        this.setState({
            buah: this.state.buah,
            inputNama: "",
            inputHarga: "",
            inputBerat: ""
        })
    }

    handleDelete(event) {
        let newBuah = [...this.state.buah]
        newBuah.splice(event.target.value, 1)
        this.setState({
            buah: newBuah
        })
    }
}

export default Forms;