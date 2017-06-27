require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get Q1" do
    get pages_Q1_url
    assert_response :success
  end

  test "should get Q2" do
    get pages_Q2_url
    assert_response :success
  end

  test "should get Q3" do
    get pages_Q3_url
    assert_response :success
  end

  test "should get Q4" do
    get pages_Q4_url
    assert_response :success
  end

end
