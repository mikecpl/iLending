import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import colors from 'tailwindcss/colors';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const SearchBar = ({screenName}) => {
  // TODO reduxba betenni a keresés eredményét a screenName alapján

  return (
    <View className="flex flex-row items-center space-x-2 bg-slate-700 px-2 py-1 rounded-lg">
      <TouchableOpacity className="p-2">
        <FontAwesomeIcon icon={faSearch} color={colors.slate[400]} size={18} />
      </TouchableOpacity>
      <TextInput className="text-white grow h-10 text-lg pt-1 pb-2 mr-6" 
        multiline={true}
        blurOnSubmit={true}
        numberOfLines={1}
        placeholder="Search"
        placeholderTextColor={colors.slate[400]} 
      />

      <TouchableOpacity className="p-2">
        <FontAwesomeIcon icon={faFilter} color={colors.slate[400]} size={18} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar;
