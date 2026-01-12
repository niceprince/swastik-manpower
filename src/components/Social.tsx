import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io5";

type SocialSource = {
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  pinterest: string;
  whatsapp: string;
};

const Social: React.FC<{ source: SocialSource; className: string }> = ({
  source,
  className,
}) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    pinterest,
    whatsapp,
  } = source;
  return (
    <ul className={className}>
      {facebook && (
        <li className="inline-block">
          <a
            aria-label="facebook"
            href={`${facebook}/#!`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFacebook />
          </a>
        </li>
      )}
      {twitter && (
        <li className="inline-block">
          <a
            aria-label="twitter"
            href={`${twitter}/#!`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTwitter />
          </a>
        </li>
      )}
      {instagram && (
        <li className="inline-block">
          <a
            aria-label="instagram"
            href={`${instagram}/#!`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoInstagram />
          </a>
        </li>
      )}
      {youtube && (
        <li className="inline-block">
          <a
            aria-label="youtube"
            href={`${youtube}/#!`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoYoutube />
          </a>
        </li>
      )}
      {linkedin && (
        <li className="inline-block">
          <a
            aria-label="linkedin"
            href={`${linkedin}/#!`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoLinkedin />
          </a>
        </li>
      )}

      {pinterest && (
        <li className="inline-block">
          <a
            aria-label="pinterest"
            href={`${pinterest}/#!`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoPinterest />
          </a>
        </li>
      )}

      {whatsapp && (
        <li className="inline-block">
          <a
            aria-label="whatsapp"
            href={`${whatsapp}/#!`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoWhatsapp />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
