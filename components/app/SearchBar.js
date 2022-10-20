import { View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import colors from 'tailwindcss/colors';
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const SearchBar = ({screenName}) => {
  // TODO reduxba betenni a keresés eredményét a screenName alapján

  return (
    <View className="flex flex-row items-center space-x-1 bg-slate-700 px-2 py-1 rounded-lg">
      <TouchableOpacity className="p-1">
        <MagnifyingGlassIcon color={colors.slate[400]} size={20} />
      </TouchableOpacity>

      <TextInput className="text-white h-10 grow text-lg pt-1 pb-[10px] pr-6"
        multiline={true}
        blurOnSubmit={true}
        numberOfLines={1}
        placeholder="Search"
        placeholderTextColor={colors.slate[400]}
      />

      <TouchableOpacity className="p-1">
        <AdjustmentsHorizontalIcon color={colors.slate[400]} size={20} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar;
