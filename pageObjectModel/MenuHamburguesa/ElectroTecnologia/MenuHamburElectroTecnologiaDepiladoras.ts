import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaDepiladoras extends BasePage {

    readonly DEPILADORAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DEPILADORAS =this.page.locator('//a [@id="menu-item-category-depiladoras"]')
    }

    async clickElectroTecnologiaDepiladoras(): Promise<void> {
        await this.click(this.DEPILADORAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaDepiladoras(): Promise<void> {
        await this.clickElectroTecnologiaDepiladoras()
    }
}
