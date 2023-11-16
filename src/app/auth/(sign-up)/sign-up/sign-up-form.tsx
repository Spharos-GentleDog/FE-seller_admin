'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Password } from '@/components/ui/password';
import { Checkbox } from '@/components/ui/checkbox';
import { SubmitHandler } from 'react-hook-form';
import { Title, Text } from '@/components/ui/text';
import Link from 'next/link';
import { Form } from '@/components/ui/form';
import * as z from 'zod';
import { useState } from 'react';
import { PiArrowRightBold } from 'react-icons/pi';
import { routes } from '@/config/routes';

type FormValues = {
  brandName: string;
  officialWebsite: string;
  companyProductInfo: string;
  companyName: string;
  businessNumber: string;
  businessAddress: string;
  representativeName: string;
  phoneNumber: string;
  mobilePhoneNumber: string;
  email: string;
  password: string;
  businessLicenseNumber: string;
  confirmPassword: string;
  openingDate: string;
  businessCategory: string;
  isAgreed: boolean;
};

const initialValues = {
  brandName: '',
  officialWebsite: '',
  companyProductInfo: '',
  companyName: '',
  businessNumber: '',
  businessAddress: '',
  representativeName: '',
  phoneNumber: '',
  mobilePhoneNumber: '',
  email: '',
  password: '',
  businessLicenseNumber: '',
  confirmPassword: '',
  openingDate: '',
  businessCategory: '',
  isAgreed: false,
};

const signUpFormSchema = z.object({
  brandName: z.string().min(1, { message: '브랜드명을 입력해주세요.' }),
  officialWebsite: z.string().min(1, { message: '공식 홈페이지 주소를 입력해주세요.' }),
  companyProductInfo: z.string().min(1, { message: '상품소개 및 관련 내용을 입력해주세요.' }),
  companyName: z.string().min(1, { message: '회사명을 입력해주세요.' }),
  businessNumber: z.string().min(1, { message: '사업자 등록번호를 입력해주세요.' }),
  businessAddress: z.string().min(1, { message: '사업장 주소를 입력해주세요.' }),
  representativeName: z.string().min(1, { message: '대표자명을 입력해주세요.' }),
  phoneNumber: z.string().min(1, { message: '전화번호를 입력해주세요.' }),
  mobilePhoneNumber: z.string().min(1, { message: '휴대전화 번호를 입력해주세요.' }),
  email: z.string().email({ message: '이메일 주소가 유효하지 않습니다.' }),
  password: z.string().min(8, { message: '비밀번호를 8자리 이상 입력해주세요.' }),
  confirmPassword: z.string().min(8, { message: '비밀번호 확인을 위해 8자리 이상 입력해주세요.' }),
  businessLicenseNumber: z.string().min(1, { message: '통신 판매업 신고번호를 입력해주세요.' }),
  openingDate: z.string().min(1, { message: '개업일자를 입력해주세요.' }),
  businessCategory: z.string().min(1, { message: '사업체 분류를 입력해주세요.' }),
  isAgreed: z.boolean(),
});

export default function SignUpForm() {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setReset({ ...initialValues, isAgreed: false });
  };

  return (
    <>
      <Form<FormValues>
        validationSchema={signUpFormSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
            <Input
              type="text"
              size="lg"
              label="브랜드 명"
              // placeholder="Enter your first name"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('brandName')}
              error={errors.brandName?.message}
            />
            <Input
              type="text"
              size="lg"
              label="공식홈페이지 주소"
              // placeholder="Enter your last name"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('officialWebsite')}
              error={errors.officialWebsite?.message}
            />
            <Input
              type="text"
              size="lg"
              label="회사 상품소개 및 관련내용"
              // placeholder="Enter your last name"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('companyProductInfo')}
              error={errors.companyProductInfo?.message}
            />
            <Input
              type="text"
              size="lg"
              label="회사명"
              // placeholder="Enter your last name"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('companyName')}
              error={errors.companyName?.message}
            />
            <Input
              type="text"
              size="lg"
              label="사업자 등록번호"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your pin"
              {...register('businessNumber')}
              error={errors.businessNumber?.message}
            />
            <Input
              type="text"
              size="lg"
              label="사업장 주소"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your add"
              {...register('businessAddress')}
              error={errors.businessAddress?.message}
            />
            <Input
              type="text"
              size="lg"
              label="대표자명"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter representative Name"
              {...register('representativeName')}
              error={errors.representativeName?.message}
            />
                        <Input
              type="number"
              size="lg"
              label="전화번호"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your number"
              {...register('phoneNumber')}
              error={errors.phoneNumber?.message}
            />
                        <Input
              type="number"
              size="lg"
              label="휴대전화"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your number"
              {...register('mobilePhoneNumber')}
              error={errors.mobilePhoneNumber?.message}
            />
            <Input
              type="email"
              size="lg"
              label="이메일"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your email"
              {...register('email')}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size="lg"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <Input
              type="text"
              size="lg"
              label="통신 판매업 신고번호"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your pin"
              {...register('businessLicenseNumber')}
              error={errors.businessLicenseNumber?.message}
            />
            <Password
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 한번 입력해주세요"
              size="lg"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('confirmPassword')} // 'confirmPassword' 필드를 등록합니다.
              error={errors.confirmPassword?.message} // 'confirmPassword' 필드의 에러를 표시합니다.
            />
            <Input
              type="date"
              size="lg"
              label="개업일자"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="info"
              placeholder="Enter your date"
              {...register('openingDate')}
              error={errors.openingDate?.message}
            />           
            {/* <Password
              label="Confirm Password"
              placeholder="Enter confirm password"
              size="lg"
              className="[&>label>span]:font-medium"
              color="info"
              inputClassName="text-sm"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            /> */}
            <div className="col-span-2 flex items-start ">
              <Checkbox
                {...register('isAgreed')}
                className="[&>label>span]:font-medium [&>label]:items-start"
                label={
                  <>
                    마케팅 및 광고성 활용 수신동의{' '}
                    <Link
                      href="/"
                      color='red'
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      수신
                    </Link>{' '}
                    &{' '}
                    <Link
                      href="/"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      동의
                    </Link>
                  </>
                }
              />
            </div>
            <Button
              size="lg"
              color="DEFAULT"
              type="submit"
              className="col-span-2 mt-2"
            >
              <span>회원가입</span>{' '}
              <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        이미 가입되어 있으시다면?{' '}
        <Link
          href={routes.auth.signIn}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          로그인하기
        </Link>
      </Text>
    </>
  );
}
