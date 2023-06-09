import { AxiosError } from 'axios'
import { useState, createContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('@Auth:token')

    async function getUserData() {
      try {
        const { data } = await api.get('/checktoken', {
          headers: { Authorization: 'Bearer ' + token },
        })
        setUser(data)
      } catch (e) {
        localStorage.clear()
      } finally {
        setIsFetching(false)
      }
    }

    if (!token) {
      setIsFetching(false)
    }

    if (token) {
      getUserData()
    }
  }, [])

  const signIn = async (inputData) => {
    try {
      setIsLoading(true)
      const { data } = await api.post('/auth/authenticate', {
        email: inputData.email,
        password: inputData.password,
      })

      api.defaults.headers.common.Authorization = `Bearer ${data.token}`
      setUser(data.data)
      localStorage.setItem('@Auth:token', data.token)
      window.location.reload()
    } catch (e) {
      toast.error(
        e instanceof AxiosError && e.response.data
          ? e.response.data.message
          : 'Erro Interno',
        {
          theme: 'colored',
        },
      )
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
        signOut,
        isFetching,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}