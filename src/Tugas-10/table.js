import React, { Component } from "react";

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

class Table extends Component {
    render() {
        let dataHargaBuah = [
            { nama: "Semangka", harga: 10000, berat: 1000 },
            { nama: "Anggur", harga: 40000, berat: 500 },
            { nama: "Strawberry", harga: 30000, berat: 400 },
            { nama: "Jeruk", harga: 30000, berat: 1000 },
            { nama: "Mangga", harga: 30000, berat: 500 }
        ]

        return (
            <div className="tugas10">
                <h1 style={{ marginTop: "10px"}}>Tabel Harga Buah</h1>
                <table>
                    <tr id="header">
                        <Header id="nama" item="Nama"/>
                        <Header id="harga" item="Harga"/>
                        <Header id="berat" item="Berat"/>
                    </tr>
                    {dataHargaBuah.map(el => {
                        return (
                            <>
                                <tr>
                                    <Detail item={el.nama}/>
                                    <Detail item={el.harga}/>
                                    <Detail item={el.berat / 1000 + " kg"}/>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </div>
        );
    }
}

export default Table;