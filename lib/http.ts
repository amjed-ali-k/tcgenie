import { Key } from "swr"
import useSWRImmutable from "swr/immutable"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useGetPermenant = <T>(key: Key) => useSWRImmutable<T>(key, fetcher)
