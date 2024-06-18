import { ErrorApi } from "../errors/error"
import { Articles } from "../models/article"



export const createArticle = async (articleParams:any) => {
    try {
        const articleExists = await Articles.findOne({title: articleParams.title})

        if (articleExists) {
           throw new ErrorApi(400, 'Article already exists')
        }

        const article = await Articles.create(articleParams)

        return article;
    } catch (error:any) {
        throw error;
    }
}  

export const updateArticle = async (articleId:any, articleParams:any) => {
    try {
        const updatedArticle = await Articles.findByIdAndUpdate(articleId, articleParams)

        if (!updatedArticle) {
            throw new ErrorApi(404, "Article not found")
        }

        return
    } catch (error:any) {
        throw error;
    }
}

export const deleteArticle = async (articleId:any) => {
    try {
        const deletedArticle = await Articles.deleteOne({_id: articleId})

        if (!deletedArticle) {
            throw new ErrorApi(404, 'Article not found')
        }
        return
    } catch (error:any) {
        throw error;
    }
}