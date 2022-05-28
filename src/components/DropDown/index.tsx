import {
    View, Text, TextInput, Dimensions, FlatList, StyleSheet, Keyboard, TouchableOpacity,
    TouchableWithoutFeedback, Modal, ActivityIndicator, Animated
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleProps } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Asterisk from '../Asterisk';
import fonts from '../../assets/fonts';
import colors from '../../assets/colors';
import GlobalStyles from '../GlobalStyles';

const font = "";
interface SearchableTextInputProps {
    setSelectedItem: Function,
    data?: Array<any>,
    defaultValue?: string,
    style?: StyleProps,
    title?: string,
    searchable?: boolean,
    placeholder?: string,
    isMandatory?: boolean,
    isError?: boolean,
}
const { height, width } = Dimensions.get('window');

export default function ({
    data = [], defaultValue, setSelectedItem, style, searchable = true, title, placeholder, isMandatory = false,
    isError = false
}: SearchableTextInputProps) {
    const [Search, setSearch] = useState('');
    const [DropdownVisibility, setDropdownVisibility] = useState(false);
    const [Data, setData] = useState(data);
    placeholder

    useEffect(() => {
        let newData = data;
        newData = data.filter(function (item) {
            const itemData = item
                ? item.toUpperCase()
                : ''.toUpperCase();
            const textData = Search.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setData([...newData]);
    }, [Search]);

    const onOptionClick = (item: any) => {
        setSearch("");
        setSelectedItem(item);
        setDropdownVisibility(false);
        Keyboard.dismiss();
    }

    const remove = () => {
        setSearch("");
        setSelectedItem("");
    }

    const RenderOptions = () => (
        Data.length != 0 ?
            <Animated.FlatList
                data={Data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.option} onPress={() => onOptionClick(item)}>
                            <Text style={styles.optionText}>{item}</Text>
                        </TouchableOpacity>
                    );
                }}
                scrollEnabled={true}
                keyExtractor={(i) => i}
                initialNumToRender={20}
                showsVerticalScrollIndicator={true}
            /> :
            <TouchableOpacity disabled={true} style={styles.option}>
                {
                    Search == "" ?
                        <TouchableWithoutFeedback onPress={() => { }}>
                            <ActivityIndicator animating={true} size={'small'} color={colors.primary} />
                        </TouchableWithoutFeedback>
                        :
                        <TouchableWithoutFeedback onPress={() => { }}>
                            <Text style={[styles.option, { fontFamily: fonts.light }]}>{`Results not found for "${Search}"`}</Text>
                        </TouchableWithoutFeedback>
                }
            </TouchableOpacity>
    );

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => {
                setDropdownVisibility(!DropdownVisibility);
                setSearch('');
            }}>
                <View style={[GlobalStyles.textInputContainer, { borderColor: isError ? colors.red : colors.black, width: undefined, alignItems: 'center', justifyContent: 'center' }, style]}>
                    <Text
                        style={[styles.text, { color: defaultValue ? colors.black : colors.placeholderColor }]}
                        onPress={() => setDropdownVisibility(!DropdownVisibility)}
                    >
                        {defaultValue ? defaultValue : placeholder}
                    </Text>
                    {
                        !defaultValue ?
                            <AntDesign
                                style={styles.dropDownIcon}
                                onPress={() => setDropdownVisibility(!DropdownVisibility)}
                                name={DropdownVisibility ? "caretup" : 'caretdown'}
                                size={20}
                                color={colors.black}
                            />
                            :
                            <Entypo
                                style={styles.crossIcon}
                                name={'cross'}
                                size={20}
                                color={colors.black}
                                onPress={() => remove()}
                            />
                    }
                </View>
            </TouchableWithoutFeedback>

            <Modal
                transparent={true}
                visible={DropdownVisibility}
                onRequestClose={() => setDropdownVisibility(false)}
            >
                <View onTouchStart={() => setDropdownVisibility(false)} style={styles.blurView} />
                <View style={styles.modal}>
                    <View style={styles.optionsContainer}>
                        {
                            searchable &&
                            <View
                                style={[styles.dropdownView, styles.search, style]}
                            >
                                <TextInput
                                    style={styles.searchTextInput}
                                    placeholder={'Type here to search...'}
                                    placeholderTextColor={colors.placeholderColor}
                                    defaultValue={Search}
                                    onChangeText={text => setSearch(text)}
                                />
                                <AntDesign style={styles.searchIcon} name={"search1"} size={20} />
                            </View>
                        }
                        <RenderOptions />
                    </View>
                </View>
            </Modal>
        </View >
    )
}
const styles = StyleSheet.create({
    dropdownView: {
        height: 40,
        width: width - 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.black,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        zIndex: 1
    },
    search: { borderWidth: 0, borderBottomWidth: 1, width: width - (width / 100 * 10 + 20), alignSelf: 'center' },
    text: { flex: 1, paddingStart: 10, fontFamily: fonts.regular, fontSize: 14,textAlign:'center' },
    textInputView: { height: 50 },
    textInputTitleView: {
        height: 18, backgroundColor: colors.white, borderRadius: 5, elevation: 0.1,
        paddingHorizontal: 5, start: 10, top: -10, position: 'absolute'
    },
    textInputTitle: { fontSize: 12, fontFamily: fonts.regular, color: colors.black },
    option: { height: 40, padding: 5, paddingHorizontal: 10, justifyContent: 'center', zIndex: 2, fontFamily: fonts.regular },
    optionText: { color: colors.black, fontFamily: fonts.regular },
    dropDownIcon: { height: 40, padding: 10, color: colors.black },
    crossIcon: { height: 40, end: 0, padding: 10, color: colors.black },
    searchTextInput: { width: (width / 100 * 80) - 60, color: colors.black, paddingStart: 10, zIndex: 2, fontFamily: fonts.regular },
    blurView: { height, width, position: 'absolute', backgroundColor: colors.transparentBlack },
    modal: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    optionsContainer: { maxHeight: height / 2, width: width / 100 * 90, backgroundColor: colors.white, borderRadius: 5, padding: 10, zIndex: 1, elevation: 5 },
    searchIcon: { height: 40, padding: 10, color: colors.black, zIndex: 2 }
});