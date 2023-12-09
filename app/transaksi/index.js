import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const TransactionPage = () => {
    // Contoh data transaksi (tanpa database)
    const [transactions, setTransactions] = useState([
        { id: '1', description: 'Pesanan 1', amount: 50 },
        { id: '2', description: 'Pesanan 2', amount: 30 },
        // Tambahkan data transaksi sesuai kebutuhan
    ]);

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: '#D80032' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Halaman Transaksi</Text>

            {/* Tombol tambah transaksi */}
            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor: '#17B978',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
                onPress={() => {
                    // Logika tambah transaksi
                    console.log('Tambah Transaksi');
                }}
            >
                <Text style={{ color: 'white' }}>Tambah Transaksi</Text>
            </TouchableOpacity>

            {/* Daftar transaksi */}
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text>{item.description}</Text>
                        <Text>Amount: {item.amount}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default TransactionPage;
