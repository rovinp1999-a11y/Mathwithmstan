import { FileText, Folder } from './Icons'

export default function DriveEmbed({ name, href, type = 'file' }) {
  const Icon = type === 'folder' ? Folder : FileText
  const Wrapper = href ? 'a' : 'div'
  const props = href
    ? { href, target: '_blank', rel: 'noopener noreferrer', className: 'drive-embed' }
    : { className: 'drive-embed', style: { cursor: 'default' } }

  return (
    <Wrapper {...props}>
      <Icon />
      <span>{name}</span>
    </Wrapper>
  )
}
