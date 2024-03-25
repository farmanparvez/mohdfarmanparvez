import React from "react";
import { Row, Descriptions } from "antd";
import { workDetailType } from "./Work";
import { IVisible } from "./work/WorkClient";

// type propTy = IVisible;

const WorkModalDetails = (props: IVisible) => {

  // console.log(IVisible);
  console.log(props);
  const { details } = props;

  return (
    <div>
      <Row gutter={16} justify="center">
        <Descriptions title="" bordered size={"small"}>
          <Descriptions.Item label="Github Repo" span={24}>
            <span>
              <a target="_blank" href={`${details?.details}`}>
                {details?.repoLink}
              </a>
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="Website Url" span={24}>
            <a target="_blank" href={`${details?.websiteLink}`}>
              {details?.websiteLink}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Details" span={24}>
            <h4> {details?.details}</h4>
          </Descriptions.Item>
        </Descriptions>
      </Row>
    </div>
  );
};

export default WorkModalDetails;
