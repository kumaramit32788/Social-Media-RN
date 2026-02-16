import React, { memo, useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { Colors } from '../../theme/colors'
import request from '../../Api/request'
import Fab from '../../Componets/Fab'
import BottomModal from '../../Componets/BootomModal'
import IrisTextInput from '../../Componets/TextInput'

interface Post {
    _id?: string
    title: string
    description: string
    likes?: string[]
    createdAt?: string
}

/* ===========================
   MEMOIZED ITEM COMPONENT
=========================== */
const PostCard = memo(({ item }: { item: Post }) => {
    return (
        <View style={styles.card}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.createdAt}</Text>
        </View>
    )
})

const Post = () => {
    const [postData, setPostData] = useState<Post[]>([])
    const initialForm ={ title: '', description: '' }
    const [form, setForm] = useState<Post>(initialForm)
    const [open, setOpen] = useState<boolean>(false)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res: Post[] = await request.get('/post/getpost', {
                    withAuth: true,
                })
                setPostData(res)
            } catch (err) {
                console.error(err)
            }
        }
        fetchPost()
    }, [])

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        try {
          const res:any = await request.get('/post/getpost', { withAuth: true })
          setPostData(res)
        } catch (err) {
          console.error(err)
        } finally {
          setRefreshing(false)
        }
      }, [])

    const handleAddPost = async () => {
        setOpen(false)
        setForm(initialForm)
        try {
            const res = await request.post("/post/create", form,{ withAuth: true })
        } catch (error) {

        }
    }

    const renderItem = useCallback(
        ({ item }: { item: Post }) => <PostCard item={item} />,
        []
    )

    return (
        <View style={styles.container}>
            {!postData.length &&
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}><Text>No Post Found!</Text></View>
            }
            <FlatList
                data={postData}
                keyExtractor={(item: any) => item?._id}
                renderItem={renderItem}
                refreshing={refreshing}
                onRefresh={onRefresh}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={5}
                removeClippedSubviews
            />
            <Fab onPress={() => setOpen(true)} />
            <BottomModal
                title='Add Post'
                isOpen={open}
                onClose={() => { setOpen(false) }} >
                <View>
                    <IrisTextInput
                        placeholder='Title'
                        value={form.title}
                        onChangeText={(text: any) => {
                            setForm({ ...form, title: text })
                        }} />
                    <IrisTextInput
                        placeholder='Description'
                        value={form.description} onChangeText={(text: any) => {
                            setForm({ ...form, description: text })
                        }} />
                    <TouchableOpacity
                        onPress={handleAddPost}
                        style={{ justifyContent: "center", alignItems: 'center', backgroundColor: Colors.primary, padding: 12 ,borderRadius:16,marginTop:18}}>
                        <Text style={{ color: Colors.whiteText }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </BottomModal>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
    },
    card: {
        padding: 16,
        backgroundColor: Colors.cardBackground,
        marginBottom: 20,
        width: '100%',
    },
})
