import { ActivityIndicator, View } from "react-native"
import { s } from "./styles"
import { colors } from "@/styles/theme"

export default function Loading() {
    return <ActivityIndicator color={colors.green.base} style={s.container} />
}