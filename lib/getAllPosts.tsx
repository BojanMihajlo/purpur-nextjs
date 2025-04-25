export default async function getAllPosts () {
    const res = await fetch("https://purpurmk.site/wp-json/wp/v2/posts")
    if (!res.ok) return undefined

    return res.json()
}