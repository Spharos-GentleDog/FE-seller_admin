import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { pagesOptions } from './pages-options';

export const authOptions: NextAuthOptions = {
  // debug: true,
  pages: {
    ...pagesOptions,
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user}
    },

    async session({ session, token }){
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      const parsedUrl = new URL(url, baseUrl);
      if (parsedUrl.searchParams.has('callbackUrl')) {
        return `${baseUrl}${parsedUrl.searchParams.get('callbackUrl')}`;
      }
      if (parsedUrl.origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid
        
        console.log('credentials', credentials)

        
        if (
          credentials.username === 'jason@jason.com' && credentials.password === '123456'
        ) {
          console.log("Good")
          const result: any = {
            accessToken: '1abckdkakaldasdkdkdkdkdkd',
            refreshToken: 'adsf;kjalsdkf;lkajsdfljiejoajsdf',
            vendorEmail: 'beat1103@gmail.com',
            brandName: 'gentledog',
            brandLogoImageUrl: 'jason',
            authorities: [
              { authority: 'Admin' },
            ],
          }
          // const data = await fetch('http://localhost:8080/api/v1/auth/login', {
          //   method: 'POST',
          //   headers: {  'Content-Type': 'application/json' },
          //   body: JSON.stringify(credentials),
          // } as any)
          // console.log('data', data)
          return result;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
  ],
};
