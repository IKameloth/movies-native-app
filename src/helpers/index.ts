import ImageColors from 'react-native-image-colors'

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {})
  let primaryColor
  let secondaryColor

  if (colors.platform === 'android') {
    primaryColor = colors.dominant
    secondaryColor = colors.average
  } else if (colors.platform === 'ios') {
    primaryColor = colors.primary
    secondaryColor = colors.secondary
  } else {
    primaryColor = colors.dominant
    secondaryColor = colors.darkVibrant
  }

  return [primaryColor, secondaryColor]
}
