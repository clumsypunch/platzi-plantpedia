import { Typography } from '@ui/Typography'
import { Image } from '@components/Image'

export function AuthorCard({
  fullName,
  biography,
  photo,
  linkedIn,
  twitter,
}: Author) {
  return (
    <div className="md:flex">
      <div className="pr-8 pb-4 flex-shrink-0">
        <Image
          src={photo.url}
          width={192}
          aspectRatio="1:1"
          fit="fill"
          layout="intrinsic"
        />
      </div>
      <div>
        <Typography variant="h5" component="p">
          {fullName}
        </Typography>
        <Typography variant="body1" color="textSecondary" className="py-4">
          {biography}
        </Typography>
        <div className="flex">
          <a
            href={linkedIn}
            title={`Follow ${fullName} on Facebook`}
            target="_blank"
            className="pr-4"
          >
            FB
          </a>
          <a
            href={twitter}
            title={`Follow ${fullName} on Instagram`}
            target="_blank"
            className="pr-4"
          >
            IG
          </a>
        </div>
      </div>
    </div>
  )
}
