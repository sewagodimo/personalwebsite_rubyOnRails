# include CarrierWave::RMagick


class Ckeditor::Asset < ActiveRecord::Base
  include ActiveRecord
  include Ckeditor::Orm::ActiveRecord::AssetBase
  
  include Ckeditor::Backend::CarrierWave
end