import React from "react";
import { Divider, Stack } from "@mui/material";
import CommonButton from "@/app/component/Button";
import CommonTooltip from "@/app/component/Tooltip";

export default function TimeZone() {
  return (
    <Stack gap={3} alignItems="flex-start">
      <form className="grid grid-cols-2 gap-4 w-full">
        {/* Timezone */}
        <div>
          <label
            htmlFor="countries"
            className="mb-2 text-sm font-medium text-gray-900 flex gap-1 items-center"
          >
            Timezone
            <CommonTooltip title="A timezone is a region of the Earth that has the same standard time." />
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option defaultValue="">
              UTC-08:00 - Pacific Standard Time (PST)
            </option>
            <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
            <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
            <option value="-10:00">(GMT -10:00) Hawaii</option>
            <option value="-09:50">(GMT -9:30) Taiohae</option>
            <option value="-09:00">(GMT -9:00) Alaska</option>
            <option value="-08:00">
              (GMT -8:00) Pacific Time (US &amp; Canada)
            </option>
            <option value="-07:00">
              (GMT -7:00) Mountain Time (US &amp; Canada)
            </option>
            <option value="-06:00">
              (GMT -6:00) Central Time (US &amp; Canada), Mexico City
            </option>
            <option value="-05:00">
              (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
            </option>
            <option value="-04:50">(GMT -4:30) Caracas</option>
            <option value="-04:00">
              (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
            </option>
            <option value="-03:50">(GMT -3:30) Newfoundland</option>
            <option value="-03:00">
              (GMT -3:00) Brazil, Buenos Aires, Georgetown
            </option>
            <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
            <option value="-01:00">
              (GMT -1:00) Azores, Cape Verde Islands
            </option>
            <option value="+00:00">
              (GMT) Western Europe Time, London, Lisbon, Casablanca
            </option>
            <option value="+01:00">
              (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
            </option>
            <option value="+02:00">
              (GMT +2:00) Kaliningrad, South Africa
            </option>
            <option value="+03:00">
              (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
            </option>
            <option value="+03:50">(GMT +3:30) Tehran</option>
            <option value="+04:00">
              (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
            </option>
            <option value="+04:50">(GMT +4:30) Kabul</option>
            <option value="+05:00">
              (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
            </option>
            <option value="+05:50">
              (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
            </option>
            <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
            <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
            <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
            <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
            <option value="+08:00">
              (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
            </option>
            <option value="+08:75">(GMT +8:45) Eucla</option>
            <option value="+09:00">
              (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
            </option>
            <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
            <option value="+10:00">
              (GMT +10:00) Eastern Australia, Guam, Vladivostok
            </option>
            <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
            <option value="+11:00">
              (GMT +11:00) Magadan, Solomon Islands, New Caledonia
            </option>
            <option value="+11:50">(GMT +11:30) Norfolk Island</option>
            <option value="+12:00">
              (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
            </option>
            <option value="+12:75">(GMT +12:45) Chatham Islands</option>
            <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
            <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
          </select>
        </div>

        {/* Language */}
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Language
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Choose your account type</option>
            <option value="EN">English (US)</option>
            <option value="EN">English (UK)</option>
            <option value="SP">Spanish</option>
            <option value="FR">French</option>
            <option value="DE">German</option>
            <option value="CH">Chinese (Mandarin)</option>
          </select>
        </div>

        {/* DOB */}
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Date of birth
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Gender
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Choose your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
      <Divider sx={{ width: "100%" }} />

      <CommonButton text="Save" />
    </Stack>
  );
}
