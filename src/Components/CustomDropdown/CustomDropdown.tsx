import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import styles from './CustomDropdown-styles';
import currency from "../../../currency.json"

type Props = {
    header: string;
    selected: string;
    selectedOnPress: (category: string) => void;
};

const CustomDropdown = ({ selectedOnPress }: Props) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [filteredList, setFilteredList] = useState(currency);
    const [searchInput, setSearchInput] = useState('');

    const listMap = () => {
        return filteredList.map((item, i) => (
            <TouchableOpacity
                style={styles.dropdown_item}
                key={i}
                onPress={() => {
                    setSearchInput(item.name)
                    selectedOnPress(item.name);
                    setDropdownIsOpen(false);
                }}>
                <Text style={styles.dropdown_item_text}>{item.name}</Text>
            </TouchableOpacity>
        ));
    };

    const dropdownControl = () => {
        setDropdownIsOpen(!dropdownIsOpen);
    };

    useEffect(() => {
        setFilteredList(currency.filter((item) => item.name.includes(searchInput)));
    }, [searchInput]);

    return (
        <View style={styles.container}>
            <View style={styles.selected}>
                <TextInput
                    placeholder="Choose currency"
                    style={styles.dropdown_input}
                    onChangeText={setSearchInput}
                    placeholderTextColor="gray"
                    value={searchInput}
                />
                <TouchableOpacity onPress={dropdownControl} style={styles.dropdown_button}>
                    {dropdownIsOpen ? (
                        <Image source={require('../../../assets/up-arrow.png')} style={styles.dropdown_up_icon} />
                    ) : (
                        <Image source={require('../../../assets/down-arrow.png')} style={styles.dropdown_icon} />
                    )}
                </TouchableOpacity>
            </View>
            {dropdownIsOpen ? <ScrollView style={styles.dropdown_container}>{listMap()}</ScrollView> : null}
        </View>
    );
};

export default CustomDropdown;
