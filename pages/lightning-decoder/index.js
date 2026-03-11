import { CenterLayout } from '@/components/layout'
import { Form, Input, SubmitButton } from '@/components/form'

export default function LightningDecoder () {
  return (
    <CenterLayout>
      <div className='w-100 d-flex flex-column align-items-center py-5 px-2'>
        <h2 className='text-center mb-4'>lightning decoder</h2>
        <Form
          initial={{ bolt11: '' }}
          onSubmit={({ bolt11 }) => console.log(bolt11)}
          className='w-100'
          style={{ maxWidth: '36rem' }}
        >
          <Input
            label='bolt11 invoice'
            name='bolt11'
            placeholder='lnbc...'
            autoFocus
          />
          <div className='d-flex justify-content-end mt-3'>
            <SubmitButton variant='primary'>decode</SubmitButton>
          </div>
        </Form>
      </div>
    </CenterLayout>
  )
}
