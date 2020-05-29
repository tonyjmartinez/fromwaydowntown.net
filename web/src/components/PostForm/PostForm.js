import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'
import { useState } from 'react'
import ReactFilestack from 'filestack-react'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const PostForm = (props) => {
  const [url, setUrl] = useState(props?.image?.url)

  const onSubmit = (data) => {
    const dataWithUrl = Object.assign(data, { url })
    props.onSave(dataWithUrl, props?.image?.id)
  }

  const onFileUpload = (response) => {
    setUrl(response.filesUploaded[0].url)
  }

  return (
    <div className="box-border text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mt-4 mb-4"
          titleClassName="mt-0 font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="title"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.post?.title}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="title" className={CSS.errorMessage} />

        <Label
          name="body"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Body
        </Label>
        <TextField
          name="body"
          defaultValue={props.post?.body}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="body" className={CSS.errorMessage} />
        <ReactFilestack
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload}
          componentDisplayMode={{ type: 'immediate' }}
          actionOptions={{ displayMode: 'inline', container: 'picker' }}
        />
        <div
          id="picker"
          style={{
            marginTop: '2rem',
            height: '20rem',
            display: url ? 'none' : 'block',
          }}
        ></div>
        {url && (
          <div>
            <img src={url} style={{ display: 'block', margin: '2rem 0' }} />
            <a
              href="#"
              onClick={() => setUrl(null)}
              className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
            >
              Replace Image
            </a>
          </div>
        )}

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
