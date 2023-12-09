import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Dashboard = () => {
    // Penggunaan data palsu sebagai contoh
    const userName = "Fa'iq Rindha Maulana";
    const userRole = "Admin";  // Ganti dengan peran pengguna yang sesuai

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D80032' }}>
            <Text style={{ color: 'white', marginBottom: 10 }}>{`Selamat datang, ${userName} (${userRole})`}</Text>
            <TouchableOpacity
                style={{
                    marginTop: 20,
                    padding: 10,
                    backgroundColor: '#17B978',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white' }}>Masuk</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Dashboard;
